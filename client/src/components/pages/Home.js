const Home = () => {
    return (  
        <div className="home">
            <div className="home__container">
                <div className="home__container__title">
                    <h1>Home</h1>
                </div>
                <div className="home__container__form">
                    <form>
                        <div className="home__container__form__input">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Email" />
                        </div>
                        <div className="home__container__form__input">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Password" />
                        </div>
                        <div className="home__container__form__input">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;