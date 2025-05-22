// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://arme-project.github.io',
	base: 'ARME-System-Setup',
	integrations: [
		starlight({
			title: 'ARME Project System',
			logo: {
				src: './src/assets/ARME.png',
			},
			social: {
				github: 'https://github.com/arme-project ',
			},
			sidebar: [
				{
					label: 'Get Started',
					items: [
								{ label: 'About', slug: 'get-started/about' },
					],
				},

				{
					label: 'JUCE Plugin',
					items: [
								{ label: 'Adaptive Metronome', slug: 'juce-plugin/about' },
								{ label: 'Demonstration Setup', slug: 'juce-plugin/demo' },
								{ label: 'Development Setup', slug: 'juce-plugin/dev' },
					],
				},

				{
					label: 'MAX/MSP Patch',
					items: [
								{ label: 'Score Follower', slug: 'max-msp-patch/about' },
								{ label: 'Demonstration Setup', slug: 'max-msp-patch/demo' },
								{ label: 'Demonstration Setup (Presentation Mode)', slug: 'max-msp-patch/demo-presentation-mode' },
					],
				},

				{
					label: 'Unity and Magic Leap 2 Project',
					items: [
								{ label: 'XR Integration ML2', slug: 'unity-ml2-project/about' },
								{ label: 'Demonstration Setup', slug: 'unity-ml2-project/demo' },
								{ label: 'Development Setup', slug: 'unity-ml2-project/dev' },
					],
				},
			],
			customCss: [
				'./src/styles/root.css',
			  ],
			lastUpdated: true,
		}),
	],
});
