import { useEffect } from 'react';

export default function useAd() {
	useEffect(() => {
		let logoStyle = `
		font-size: 22px;
		color: #fff;
		text-shadow: 0 0 5px #fff;
		background-color: #000;
		
		padding: 5px 5px;
		`;
		let plainTextStyle = `
		font-size: 16px;
		`;
		let contactStyle = `
		font-size: 18px;
		color: blue;
		`;

		console.clear();
		console.log('%cＩＴ ＩＳ ＩＴ\n\n', logoStyle);
		console.log('%c不吃饭不睡觉, 打起精神赚钞票!\n\n', plainTextStyle);
		console.log('%c加微信群: Yernar2001', contactStyle);
	}, []);
}
