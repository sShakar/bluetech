import { Screen, Dialog, Loading, Notify, Quasar, QBtn, QInput, QSelect } from 'quasar';
import type { QuasarPluginOptions, QInputProps, QBtnProps, QSelectProps } from 'quasar';
import quasarIconSet from 'quasar/icon-set/material-icons-outlined';
// Import icon libraries
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';
import '@quasar/extras/mdi-v6/mdi-v6.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

// Default Quasar components props
const defaultQBtnProps: Partial<QBtnProps> = {
	unelevated: true,
	square: true
};

const defaultQInputProps: Partial<QInputProps> = {
	outlined: true,
	clearable: true,
	dense: true,
	color: 'grey-8'
};

const defaultQSelectProps: Partial<QSelectProps> = {
	outlined: true,
	clearable: true,
	dense: true,
	color: 'grey-8'
};

assignDefaultProps(QBtn.props, defaultQBtnProps);
assignDefaultProps(QInput.props, defaultQInputProps);
assignDefaultProps(QSelect.props, defaultQSelectProps);

/**
 * @description assign default props to Quasar components
 */
function assignDefaultProps(props: any, defaultPropValues: any) {
	Object.entries(defaultPropValues).forEach(([prop, value]) => {
		props[prop] =
			Array.isArray(props[prop]) === true || typeof props[prop] === 'function'
				? { type: props[prop], default: value }
				: { ...props[prop], default: value };
	});
}

Screen.setSizes({ sm: 768, md: 1200 });

const options: Partial<QuasarPluginOptions> = {
	plugins: {
		Dialog,
		Loading,
		Notify
	},
	iconSet: quasarIconSet,
	config: {
		dark: localStorage.getItem('theme') === 'dark',
		screen: {
			bodyClasses: true
		},
		notify: {
			position: 'top',
			timeout: 2000
		}
	}
};

export { Quasar, options };
