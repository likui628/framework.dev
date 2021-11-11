import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { sprinkles } from "../sprinkles/sprinkles.css"
import { vars } from "../themes/themes.css"

export const tagContainerStyle = recipe({
	base: [
		sprinkles({
			paddingY: 4,
			paddingX: 8,
			borderRadius: 6,
			textStyle: "buttonSmall",
			color: "onSurface",
		}),
		{
			textTransform: "capitalize",
			cursor: "pointer",
		},
	],
	variants: {
		color: {
			neutral: {
				backgroundColor: vars.palette.neutral95,
				transition: "background 0.15s ease-in",
				":hover": {
					backgroundColor: vars.palette.neutral90,
					transition: "none",
				},
			},
			beginner: {
				backgroundColor: vars.themeColors.beginner,
				transition: "background 0.15s ease-in",
				":hover": {
					backgroundColor: vars.themeColors.beginnerHover,
					transition: "none",
				},
			},
			intermediate: {
				backgroundColor: vars.themeColors.intermediate,
				transition: "background 0.15s ease-in",
				":hover": {
					backgroundColor: vars.themeColors.intermediateHover,
					transition: "none",
				},
			},
			advanced: {
				backgroundColor: vars.themeColors.advanced,
				transition: "background 0.15s ease-in",
				":hover": {
					backgroundColor: vars.themeColors.advancedHover,
					transition: "none",
				},
			},
		},
	},
	defaultVariants: {
		color: "neutral",
	},
})

export const tagTextStyle = style([
	sprinkles({
		textStyle: "buttonSmall",
		color: "onSurface",
	}),
	{
		opacity: 0.6,
		textTransform: "capitalize",
		transition: "opacity 0.15s ease-in",
		":hover": {
			opacity: 0.75,
			transition: "none",
		},
	},
])
