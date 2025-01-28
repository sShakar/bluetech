export default function createObjectFromString(semiSeperatedData: string) {
	if (!semiSeperatedData.includes(':')) throw new Error('FE[422]: Invalid socket message');

	const object = {} as any;
	const keyValuePairs = semiSeperatedData.split(';');

	keyValuePairs.forEach(pair => {
		const [key, value] = pair.split(':');
		object[key as keyof any] = value;
	});

	return object;
}
