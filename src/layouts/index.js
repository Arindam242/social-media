import { Navbar } from "../components"
export const BaseLayout = ({ children }) => {
	return (
		<main className='bg-gray-100'>
			<Navbar />
			{children}
		</main>
	)
}
