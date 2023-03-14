import { useState, useEffect } from 'react';
import {
	CssBaseline,
	Container,
	Card,
	Grid,
	Typography,
	Box,
	Button,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import diceIcon from './assets/icon-dice.svg';
import patternMobile from './assets/pattern-divider-mobile.svg';
import patternDesktop from './assets/pattern-divider-desktop.svg';

const theme = createTheme({
	palette: {
		primary: {
			main: 'hsl(150, 100%, 66%)',
		},
		secondary: {
			main: 'hsl(193, 38%, 86%)',
		},
	},
	typography: {
		fontFamily: ['Manrope', 'sans-serif'].join(','),
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
        body {
          background-color: hsl(218, 23%, 16%);
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
      `,
		},
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: 'hsl(217, 19%, 24%)',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					width: '4rem',
					height: '4rem',
					borderRadius: '50%',

					'&:hover': {
						backgroundColor: 'hsl(150, 100%, 66%)',
						boxShadow: '0 0 30px hsl(150, 100%, 66%, .5)',
					},
				}),
			},
		},
	},
});

interface DataProps {
	id: number;
	advice: string;
}

function App() {
	const [data, setData] = useState<DataProps>();

	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		// const ApiKey = import.meta.env.API_KEY;
		// const response = await fetch(`https://api.adviceslip.com/${ApiKey}`);
		const response = await fetch('/api/handler', {
			method: 'GET',
			headers: { accept: 'application/json' },
		});
		// const response = await fetch(`${ApiKey}`);
		console.log(response);
		const result = await response.json();
		console.log(result.env);
		const refetch = await fetch(`https://api.adviceslip.com/${result.env}`, {
			method: 'GET',
			headers: { accept: 'application/json' },
		});
		const refetchresult = await refetch.json();
		console.log(refetchresult);
		// setData(result.slip);
	}

	function handleClick() {
		getData();
	}

	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container maxWidth='sm'>
					{data ? (
						<Card
							sx={{
								position: 'relative',
								overflow: 'visible',
								borderRadius: '1rem',
								boxShadow: '0 10px 30px hsla(0, 0%, 0%, .3)',
								padding: '2rem',
								paddingBottom: '3rem',
							}}
						>
							<Grid
								container
								direction='column'
								alignItems='center'
								spacing={2.5}
							>
								<Grid item>
									<Typography
										variant='subtitle2'
										component='h1'
										color='primary'
										align='center'
										sx={{ textTransform: 'uppercase', letterSpacing: '.2rem' }}
									>
										Advice #{data.id}
									</Typography>
								</Grid>
								<Grid item>
									<Typography
										variant='h5'
										component='p'
										color='secondary'
										align='center'
									>
										"{data.advice}"
									</Typography>
								</Grid>
								<Grid item>
									<Box
										component='img'
										justifyContent='center'
										src={patternMobile}
										srcSet={`${patternMobile} 730w, ${patternDesktop} 1024w`}
										sizes='(max-width: 1023px) 730px,
          1024px'
									></Box>
								</Grid>
								<Button
									variant='contained'
									color='primary'
									sx={{
										position: 'absolute',
										bottom: '0',
										left: '50%',
										transform: 'translate(-50%, 50%)',
									}}
									onClick={handleClick}
								>
									<img src={diceIcon} alt='' />
								</Button>
							</Grid>
						</Card>
					) : (
						''
					)}
				</Container>
			</ThemeProvider>
		</div>
	);
}

export default App;
