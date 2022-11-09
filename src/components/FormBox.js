import React from 'react'

const FormBox = ({ handleSubmit, eta, changeNome, changeEta, changeEmail, changeConsensi, changeMarketing, validationForm }) => {
    return (
        <>
            <div className='form-box'>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input type="text" name='nome' id='nome' className="form-control" placeholder="Inserisci il tuo nome" aria-label="nome" onChange={(e) => changeNome(e)} onBlur={() => validationForm('nome')} />
                        <p className='info'></p>
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="eta" className="form-label">Fascia d’età</label>
                        <select value={eta} className="form-select" name='eta' id='eta' aria-label="Seleziona la tua fascia d’età"  onChange={(e) => changeEta(e)} onBlur={() => validationForm('eta')}>
                            <option disabled selected >Seleziona la tua fascia d’età</option>
                            <option value="1">da 18 a 29 anni</option>
                            <option value="2">da 30 a 49 anni</option>
                            <option value="3">da 50 a 69 anni</option>
                            <option value="4">70+</option>
                        </select>
                        <p className='info'></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="email" aria-describedby="email" placeholder='Inserisci la tua email' onChange={(e) => changeEmail(e)} onBlur={() => validationForm('email')} />
                        <p className='info'></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col check">
                        <input type="checkbox" className="form-check-input" id="check1" onChange={(e) => changeConsensi(e)} onBlur={() => validationForm('consensi')} />
                        <label className="form-check-label" htmlFor="check1">Consensi, Cras dapibus diam orci, ac finibus sem aliquam a. Sed sed ligula ut massa euismod lobortis.Cras dapibus diam orci, ac finibus sem aliquam a. Sed sed ligula ut massa euismod lobortis.</label>
                        <p className='info'></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col check">
                        <input type="checkbox" className="form-check-input" id="check2" onChange={(e) => changeMarketing(e)} />
                        <label className="form-check-label" htmlFor="check2">Marketing, Cras dapibus diam orci, ac finibus sem aliquam a. Sed sed ligula ut massa euismod lobortis.Cras dapibus diam orci, ac finibus sem aliquam a. Sed sed ligula ut massa euismod lobortis.</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <button type="button" className="cta" onClick={handleSubmit}>CONFERMA</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormBox