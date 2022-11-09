import React, { useState } from 'react'
import useFetch from '../useFetch'
import FormBox from './FormBox'
import ThankYouPage from './ThankYouPage'

import lead from '../img/lead.png'

const LandingPage = () => {
    const [isThankYouPage, setIsThankYouPage] = useState(false)
    const [nome, setNome] = useState()
    const [eta, setEta] = useState(0)
    const [email, setEmail] = useState()
    const [consensi, setConsensi] = useState(false)
    const [marketing, setMarketing] = useState(false)
    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    const { data, isLoading } = useFetch(url)

    const handleSubmit = () => {
        if (validationForm('submit')) {
            setIsThankYouPage(true)
        }
    }

    // Validazione Form prima con onSubmit e poi con onBlur
    const validationForm = (input) => {
        if (input === 'submit') {
            if (!nome) {
                document.querySelector('#nome').scrollIntoView();
                document.querySelector('#nome').classList.add('error')
                document.querySelectorAll('.info')[0].style.display = "block";
                document.querySelectorAll('.info')[0].innerHTML = 'Campo mancante'
            }
            else {
                document.querySelector('#nome').classList.add('error')
                if (nome.length < 2) {
                    document.querySelector('#nome').scrollIntoView();
                    document.querySelectorAll('.info')[0].style.display = "block";
                    document.querySelectorAll('.info')[0].innerHTML = 'Il nome è troppo corto'
                }
                else if (nome.length > 50) {
                    document.querySelector('#nome').scrollIntoView();
                    document.querySelectorAll('.info')[0].style.display = "block";
                    document.querySelectorAll('.info')[0].innerHTML = 'Il nome è troppo lungo'
                }
                else {
                    document.querySelectorAll('.info')[0].style.display = "none";
                    document.querySelector('#nome').classList.remove("error");
                }
            }
            if (!eta) {
                document.querySelector('#eta').scrollIntoView();
                document.querySelector('#eta').classList.add('error')
                document.querySelectorAll('.info')[1].style.display = "block";
                document.querySelectorAll('.info')[1].innerHTML = 'Campo mancante'
            }
            if (!email) {
                document.querySelector('#email').scrollIntoView();
                document.querySelector('#email').classList.add('error')
                document.querySelectorAll('.info')[2].style.display = "block";
                document.querySelectorAll('.info')[2].innerHTML = 'Campo mancante'
            }
            else {
                document.querySelector('#email').scrollIntoView();
                let email = document.querySelector('#email')
                const pat1 = /@/;
                const pat2 = /@@/
                if (!pat1.test(email.value)) {
                    email.classList.add('error')
                    document.querySelectorAll('.info')[2].style.display = "block";
                    document.querySelectorAll('.info')[2].innerHTML = '@ mancante'
                }
                else{
                    document.querySelector('#nome').classList.remove("error");
                    document.querySelectorAll('.info')[2].style.display = "none";
                }
                if (pat2.test(email.value)) {
                    email.classList.add('error')
                    document.querySelectorAll('.info')[2].style.display = "block";
                    document.querySelectorAll('.info')[2].innerHTML = 'Email errata'
                }
                else{
                    document.querySelector('#nome').classList.remove("error");
                    document.querySelectorAll('.info')[2].style.display = "none";
                }
            }
            if (!consensi) {
                document.querySelector('#check1').scrollIntoView();
                document.querySelector('#check1').classList.add('error')
                document.querySelectorAll('.info')[3].style.display = "block";
                document.querySelectorAll('.info')[3].innerHTML = 'Campo mancante'
            }
            if (nome && eta && email && consensi) {
                return true
            }
        }
        if (input === 'nome') {
            if (!nome) {
                document.querySelector('#nome').classList.add('error')
                document.querySelectorAll('.info')[0].style.display = "block";
                document.querySelectorAll('.info')[0].innerHTML = 'Campo mancante'
            }
            else {
                document.querySelector('#nome').classList.add('error')
                if (nome.length < 2) {
                    document.querySelectorAll('.info')[0].style.display = "block";
                    document.querySelectorAll('.info')[0].innerHTML = 'Il nome è troppo corto'
                }
                else if (nome.length > 50) {
                    document.querySelectorAll('.info')[0].style.display = "block";
                    document.querySelectorAll('.info')[0].innerHTML = 'Il nome è troppo lungo'
                }
                else {
                    document.querySelector('#nome').classList.remove("error");
                    document.querySelectorAll('.info')[0].style.display = "none";
                }
            }
        }
        if (input === 'eta') {
            if (!eta) {
                document.querySelector('#eta').classList.add('error')
                document.querySelectorAll('.info')[1].style.display = "block";
                document.querySelectorAll('.info')[1].innerHTML = 'Campo mancante'
            }
            else {
                document.querySelector('#eta').classList.remove("error");
                document.querySelectorAll('.info')[1].style.display = "none";
            }
        }
        if (input === 'email') {
            if (!email) {
                document.querySelector('#email').classList.add('error')
                document.querySelectorAll('.info')[2].style.display = "block";
                document.querySelectorAll('.info')[2].innerHTML = 'Campo mancante'
            }
            else {
                let email = document.querySelector('#email')
                const pat1 = /@/;
                const pat2 = /@@/
                email.classList.add('error')
                console.log(email.value);
                if (!pat1.test(email.value)) {
                    document.querySelectorAll('.info')[2].style.display = "block";
                    document.querySelectorAll('.info')[2].innerHTML = '@ mancante'
                }
                if (pat2.test(email.value)) {
                    document.querySelectorAll('.info')[2].style.display = "block";
                    document.querySelectorAll('.info')[2].innerHTML = 'Email errata'
                }
                else {
                    document.querySelector('#email').classList.remove("error");
                    document.querySelectorAll('.info')[2].style.display = "none";
                }
            }
        }
        if (input === 'consensi') {
            if (!consensi) {
                document.querySelector('#check1').classList.add('error')
                document.querySelectorAll('.info')[3].style.display = "block";
                document.querySelectorAll('.info')[3].innerHTML = 'Campo mancante'
            }
            else {
                document.querySelector('#check1').classList.remove("error");
                document.querySelectorAll('.info')[3].style.display = "none";
            }
        }
    }

    const changeNome = (e) => {
        setNome(e.target.value)
    }
    const changeEta = (e) => {
        setEta(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changeConsensi = (e) => {
        setConsensi(e.target.checked)
    }
    const changeMarketing = (e) => {
        setMarketing(e.target.checked)
    }

    if (!isLoading) {
        return (
            <main>
                <div className='container'>
                    <header>
                        <h1>{data.title}</h1>
                        <p>{data.body}</p>
                    </header>
                    <section className='lead my-5'>
                        <div className='row'>
                            <div className='col-12 col-md-6 order-2 order-md-1 text-center img-lead-container mt-5'>
                                <img src={lead} alt='lead' />
                            </div>
                            <div className='col-12 col-md-6 order-1 order-md-2'>
                                <h2>Titolo sopra al form</h2>
                                {!isThankYouPage ? <FormBox handleSubmit={handleSubmit} changeNome={changeNome} changeEta={changeEta} changeEmail={changeEmail} changeConsensi={changeConsensi} changeMarketing={changeMarketing} validationForm={validationForm} />
                                    : <ThankYouPage nome={nome} eta={eta} email={email} consensi={consensi} marketing={marketing} />}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}

export default LandingPage