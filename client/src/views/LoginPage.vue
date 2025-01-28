<template>
	<div>
		<q-form @reset="onReset" @submit.prevent="onSubmit">
			<q-input
				v-model="enteredUser.username"
				class="q-mb-sm"
				label="Username"
				:disable="isLoading"
				:rules="[validations.required]"
				type="text"
				autofocus
				lazy-rules
				outlined
			/>

			<q-input
				v-model="enteredUser.password"
				class="q-mb-sm"
				label="Password"
				:disable="isLoading"
				:rules="[validations.required, validations.passwordMinLength]"
				:type="isPwd ? 'password' : 'text'"
				autocomplete="current-password"
				lazy-rules
				outlined
			>
				<template #append>
					<q-icon
						:name="isPwd ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
						class="cursor-pointer"
						@click.stop.prevent="isPwd = !isPwd"
					/>
				</template>
			</q-input>

			<q-btn
				:label="'login'"
				:loading="isLoading"
				class="full-width q-py-sm q-my-md"
				color="primary"
				type="submit"
				unelevated
			/>
		</q-form>
	</div>
</template>

<script lang="ts" setup>
import { shallowReactive, shallowRef } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useAuthStore } from '@/stores/authStore';
import { useValidation } from '@/composables/useValidation';

const router = useRouter();
const { notify } = useQuasar();
const authStore = useAuthStore();
const isPwd = shallowRef<boolean>(true);

const enteredUser = shallowReactive({
	username: import.meta.env.VITE_DEFAULT_USERNAME || '',
	password: import.meta.env.VITE_DEFAULT_PASSWORD || ''
});
const isLoading = shallowRef<boolean>(false);
const validations = useValidation();

const onSubmit = async () => {
	await router.push('/');
	try {
		isLoading.value = true;
		await authStore.fetchUser(enteredUser);
		await router.replace('/');
		notify({ type: 'positive', message: `Logged in` });
	} catch (error) {
		notify({ type: 'negative', message: `${error.message}` });
	} finally {
		isLoading.value = false;
	}
};

const onReset = () => {
	enteredUser.username = '';
	enteredUser.password = '';
};
</script>
