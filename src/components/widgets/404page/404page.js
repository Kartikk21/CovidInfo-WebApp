import React from 'react';
import errorimg from '../../../assets/placeholders/error.jpg';
import theme from '../../../state/theme';
// import styles from './404page.module.scss';


export default () => {
    return (
        <>


            <div style={{ width: '100%' }}>
                <figure style={{
                    width: '50rem',
                    height: '50rem',
                    marginTop: '10rem',
                    // position: 'relative',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <img src={errorimg} alt="404error" style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }} />
                </figure>
                <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <a href="/" ><button
                        style={{
                            width: '171px',
                            height: '65px',
                            background: theme.color,
                            boxShadow: '0px 0px 16px rgb(200,200,200)',
                            borderRadius: '2rem',
                            marginBottom: '70px',
                            color: 'rgb(240,240,240)',
                            fontWeight: '500',
                            fontSize: '30px',
                            cursor: 'pointer',
                            alignItems: 'center',
                        }}>Go Back</button></a>
                </div>
            </div>

        </>
    )
}