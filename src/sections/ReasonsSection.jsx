import React from 'react'

export const ReasonsSection = () => (
    <section className='bg-slate-300 py-20'>
        <div className='container grid grid-cols-3 gap-6'>
            <div className='text-center'>
                <h3 className='text-2xl font-light mb-3'>Pro zdravou chůzi</h3>
                <p className='text-m font-light'>Ověřeno testy na Masarykově univerzitě</p>
            </div>
            <div className='text-center'>
                <h3 className='text-2xl font-light mb-3'>100% veganské a etické</h3>
                <p className='text-m font-light'>Vyráběné ručně v Česku a Chorvatsku</p>
            </div>
            <div className='text-center'>
                <h3 className='text-2xl font-light'>Doprava a výměna zdarma</h3>
            </div>
        </div>
    </section>
)