import React from 'react'
import './Videos.css'

function Videos() {


    const Data = [{

        image: '/images/V11.svg',
        text: 'What do to gain Concentration'

    },


    {

        image: '/images/V12.svg',
        text: 'How to drive Safely'

    },



    {

        image: '/images/V13.svg',
        text: 'How to live without pride'

    },



    {

        image: '/images/V14.svg',
        text: 'How to make your children better'

    },



    ]



    return (
        <div className='video-con' >


            {Data.map((item) => (


                <div className='video-row-1' >

                    <div id='box'>

                        <div id='box-img' >
                            <img src={item.image} />
                        </div>

                        <div id='box-content' >

                            <div className='box-content-img' ><img src='/images/Group 666.svg' /></div>


                            <p className='box-content-text' >{item.text}</p>


                        </div>

                    </div>

                </div>
            ))}


        </div>
    )
}

export default Videos