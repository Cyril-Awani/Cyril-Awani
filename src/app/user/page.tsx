'use client';
import React, { useState } from 'react';
import {
	Box,
	Grid,
	TextField,
	FormControl,
	InputLabel,
	Input,
	InputAdornment,
	IconButton,
	Tabs,
	Tab,
	Typography,
	Card,
	CardContent,
	Link,
} from '@mui/material';
import pic from '../../../public/images/pic.jpg';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const Userauthentication = () => {
	const [activeTab, setActiveTab] = useState('login');
	const [fullName, setFullName] = useState({ firstName: '', lastName: '' });
	const [userName, setUserName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleTabSwitch = (event: React.SyntheticEvent, newValue: string) => {
		setActiveTab(newValue);
	};
	const handleTogglePassword = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<div className='flex items-center justify-center px-2 py-4'>
			<Grid
				container
				sx={{
					maxWidth: '80%',
					boxShadow: 3,
					borderRadius: 2,
					overflow: 'hidden',
					bgcolor: 'background.paper',
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					width: '100%',
					height: { xs: 'auto', md: '70vh' },
					margin: 0,
				}}>
				{/* Left Column: Illustration or Message in a Card */}
				<Grid item xs={12} md={6} sx={{ p: { xs: 2, md: 4 } }}>
					<Card
						sx={{
							position: 'relative',
							backgroundImage: `url(${pic.src})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							height: '100%',
							borderRadius: 2,
							color: 'white',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<CardContent
							sx={{
								position: 'absolute',
								bgcolor: 'rgba(0, 0, 0, 0.6)',
								borderRadius: 2,
								p: 3,
								textAlign: 'center',
								width: '100%',
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
							}}>
							<Typography variant='h5' sx={{ fontWeight: 'bold', mb: 1 }}>
								{activeTab === 'login' ? 'Welcome Back!' : 'Join Us Now!'}
							</Typography>
							<Typography variant='body1'>
								{activeTab === 'login'
									? 'Log in to your account to continue.'
									: 'Create an account to enjoy our services.'}
							</Typography>
						</CardContent>
					</Card>
				</Grid>

				{/* Right Column: Form Section */}
				<Grid
					item
					xs={12}
					md={6}
					sx={{
						p: { xs: 2, md: 4 },
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100%',
					}}>
					<Box
						display='flex'
						justifyContent='space-between'
						alignItems='center'
						mb={3}
						flexDirection={{ xs: 'column', sm: 'row' }}
						width='100%'>
						<img
							src='/eye-protect-logo.png'
							alt='EyeProtect Logo'
							style={{ width: 40, height: 40 }}
						/>
						<Tabs
							value={activeTab}
							onChange={handleTabSwitch}
							textColor='primary'
							indicatorColor='primary'
							sx={{ width: 'auto' }}>
							<Tab label='Log in' value='login' />
							<Tab label='Sign up' value='signup' />
						</Tabs>
					</Box>

					{/* Login Form */}
					{activeTab === 'login' && (
						<Box
							component='form'
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: 2,
								width: '100%',
							}}>
							<h2>Log in Cawani</h2>
							<TextField
								label='Username'
								variant='outlined'
								fullWidth
								value={userName}
								onChange={(e) => setUserName(e.target.value)}
							/>
							<FormControl variant='outlined' fullWidth>
								<InputLabel htmlFor='login-password'>Password</InputLabel>
								<Input
									id='login-password'
									type={showPassword ? 'text' : 'password'}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									endAdornment={
										<InputAdornment position='end'>
											<IconButton onClick={handleTogglePassword}>
												{showPassword ? <FaEyeSlash /> : <FaEye />}
											</IconButton>
										</InputAdornment>
									}
								/>
							</FormControl>

							{/* Forgot Password Link */}
							<Box textAlign='right'>
								<Link href='#' variant='body2' color='primary'>
									Forgot Password?
								</Link>
							</Box>

							{/* Button container for Login */}
							<Box display='flex' justifyContent='center' mt={2}>
								<button className='bg-green-500 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300 ease-in-out w-52'>
									Log In
								</button>
							</Box>
						</Box>
					)}

					{/* Sign Up Form */}
					{activeTab === 'signup' && (
						<Box
							component='form'
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: 2,
								width: '100%',
							}}>
							<h2>Register on Cawani</h2>
							<Box
								display='flex'
								gap={2}
								flexDirection={{ xs: 'column', sm: 'row' }}>
								<TextField
									label='First Name'
									variant='outlined'
									fullWidth
									value={fullName.firstName}
									onChange={(e) =>
										setFullName((prev) => ({
											...prev,
											firstName: e.target.value,
										}))
									}
								/>
								<TextField
									label='Last Name'
									variant='outlined'
									fullWidth
									value={fullName.lastName}
									onChange={(e) =>
										setFullName((prev) => ({
											...prev,
											lastName: e.target.value,
										}))
									}
								/>
							</Box>

							<TextField
								label='Phone Number'
								variant='outlined'
								fullWidth
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<Typography variant='body2' color='textSecondary'>
												(+234)
											</Typography>
										</InputAdornment>
									),
								}}
							/>

							<FormControl variant='outlined' fullWidth>
								<InputLabel htmlFor='signup-password'>Password</InputLabel>
								<Input
									id='signup-password'
									type={showPassword ? 'text' : 'password'}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									endAdornment={
										<InputAdornment position='end'>
											<IconButton onClick={handleTogglePassword}>
												{showPassword ? <FaEyeSlash /> : <FaEye />}
											</IconButton>
										</InputAdornment>
									}
								/>
							</FormControl>

							{/* Button container for Sign Up */}
							<Box display='flex' justifyContent='center' mt={2}>
								<button className='bg-green-500 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300 ease-in-out w-52'>
									Sign Up
								</button>
							</Box>

							{/* Terms and Conditions link */}
							<Box
								display='flex'
								justifyContent='center'
								alignItems='center'
								flexDirection='column'
								mt={2}>
								<Typography
									variant='body2'
									align='center'
									sx={{ color: 'text.secondary' }}>
									By clicking on sign up, you agree to our{' '}
									<a href='#' className='text-blue-600 underline'>
										Terms and Conditions
									</a>
									,{' '}
									<a href='#' className='text-blue-600 underline'>
										Privacy Policy
									</a>{' '}
									and{' '}
									<a href='#' className='text-blue-600 underline'>
										Notification Service.
									</a>
								</Typography>
							</Box>
						</Box>
					)}
				</Grid>
			</Grid>
		</div>
	);
};

export default Userauthentication;
