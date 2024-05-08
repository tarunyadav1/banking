import React from 'react'
import HeaderBox from '../../components/HeaderBox'
import TotalBalanceBox from '../../components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async () => {
	// const loggedIn = {
	// 	firstName: 'Tarun',
	// 	lastName: 'Yadav',
	// 	email: 'tarunyadav9761@gmail.com',
	// }
	const loggedIn = await getLoggedInUser()

	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn.name || 'Guest'}
						subtext="Access and manage your account and transactions efficiently"
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={2}
						totalCurrentBalance={1234.33}
					/>
				</header>
				RECENT transactions
			</div>
			<RightSidebar
				user={loggedIn}
				transaction={[]}
				banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
			/>
		</section>
	)
}

export default Home
