import { Box, Flex, Image } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

const MotionBox = motion(Box)

const parentVariants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.25,
			delayChildren: 0.5,
		},
	},
}

const childVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
}

const Hero = () => {
	return (
		<Box
			height="100vh"
			background="black"
			color="white"
			position="relative"
			overflow="hidden"
		>
			<AnimatePresence>
				<MotionBox
					variants={parentVariants}
					initial="initial"
					animate="animate"
				>
					<MotionBox
						width="100%"
						height="100%"
						position="absolute"
						top="0"
						left="0"
						display="flex"
						alignItems="center"
						alignContent="center"
						justifyContent="center"
						variants={childVariants}
					>
						<Box> Tiny Astro</Box>
					</MotionBox>

					<Circle
						direction={-1}
						name="04"
						opacity={1}
						velocity={15}
					/>
					<Circle
						direction={1}
						name="03"
						opacity={0.8}
						velocity={20}
					/>
					<Circle
						direction={-1}
						name="02"
						opacity={0.6}
						velocity={25}
					/>
					<Circle
						direction={1}
						name="01"
						opacity={0.4}
						velocity={30}
					/>
				</MotionBox>
			</AnimatePresence>
		</Box>
	)
}

type CircleProps = {
	direction: number
	name: string
	opacity: number
	velocity: number
}

const MotionImage = motion(Image)

const Circle = ({
	direction,
	name,
	opacity,
	velocity,
}: CircleProps) => {
	return (
		<MotionBox
			position="absolute"
			top="50%"
			left="50%"
			style={{
				transform: 'translate(-50%, -50%)',
			}}
			overflow="overflow"
			width={{ base: '120vh', md: '120vw' }}
			variants={childVariants}
		>
			<MotionImage
				src={`/circles/circle-${name}.svg`}
				alt=""
				position="relative"
				style={{
					opacity,
				}}
				animate={{
					rotate: direction === -1 ? 360 : -360,
					transition: {
						duration: velocity,
						repeat: Infinity,
						ease: 'linear',
					},
				}}
			/>
		</MotionBox>
	)
}

export default Hero
