import React from 'react'


const ThankYouPage = ({ nome, eta, email, consensi, marketing }) => {
    return (
        <>
            <div className='form-box thank-you-page'>
                <div className="text-center">
                    <h2>GRAZIE!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum eget diam vitae tincidunt. Morbi dapibus interdum mauris, et aliquam sem mollis ac.</p>
                    <ul>
                        <li className='text-center'><strong>Riepilogo dati</strong></li>
                        <li><strong>Nome: </strong>{nome}</li>
                        <li><strong>Fascia d’età: </strong>{eta == 1 ? 'da 18 a 29 anni' : eta == 2 ? 'da 30 a 49 anni' : eta == 3 ? 'da 30 a 49 anni' : '70+'}</li>
                        <li><strong>E-mail: </strong>{email}</li>
                        <li><strong>Consensi: </strong>{consensi ? 'true' : 'false'}</li>
                        <li><strong>Marketing: </strong>{marketing ? 'true' : 'false'}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ThankYouPage