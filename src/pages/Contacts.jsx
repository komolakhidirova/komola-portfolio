const Contacts = () => {
	return (
		<>
			<div className='title-1-container'>
			<h1 className='title-1'>Contacts</h1>
		        </div>
		             <main className='section'>
				<div className='container'>
					<ul className='content-list'>
						<li className='content-list__item'>
							<h2 className='title-2'>Location</h2>
							<p>Tashkent, Uzbekistan</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Telegram</h2>
							<p>
								<a href='https://t.me/kkhdrv'>@kkhdrv</a>
							</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'> WhatsApp</h2>
							<p>
								<a href='tel:+998977778661'>+998 (97) 777-86-61</a>
							</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Email</h2>
							<p>
								<a href='mailto:komolakhidirova@gmail.com'>
									komolakhidirova@gmail.com
								</a>
							</p>
						</li>
					</ul>
				</div>
			</main>
			</>
	)
}

export default Contacts
