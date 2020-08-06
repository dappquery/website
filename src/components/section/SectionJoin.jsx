import React from 'react';

import Twitter from '../../assets/social/twitter.svg';
import Telegram from '../../assets/social/telegram.svg';
import Discord from '../../assets/social/discord.svg';
// import Github from '../../assets/social/github.svg';

import { LINKS } from '../../config/const';

export function SectionJoin() {
	return (
		<section className="section-join bg-black text-light text-center">
			<h2 className="mb-3">Join the community</h2>
			<div>
				<a href={LINKS.twitter} className="p-2" target="_blank" rel="noreferrer">
					<img src={Twitter} alt="Follow us on Twitter" />
				</a>
				<a href={LINKS.telegram} className="p-2" target="_blank" rel="noreferrer">
					<img src={Telegram} alt="Follow us on Telegram" />
				</a>
				<a href={LINKS.discord} className="p-2" target="_blank" rel="noreferrer">
					<img src={Discord} alt="Follow us on Discord" />
				</a>
				{/*
				<a href="https://www.github.com" className="p-2">
					<img src={Github} alt="Follow us on Github" />
				</a>
				*/}
			</div>
		</section>
	);
}