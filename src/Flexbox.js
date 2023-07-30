import React from 'react'

export default function Flexbox() {
    
    return (
        <div className='flex'>
            <div className="w-1/2">
                <h1 className="text-3xl font-bold">John Wick</h1>
                <p className="text-gray-600">
                    John Wick is a fictional character played by Keanu Reeves in the action-thriller film series of the same name. John Wick is a retired hitman who returns to his violent past when a gang of thugs steal his car and kill his dog, which was a gift from his recently deceased wife. Seeking revenge, John Wick embarks on a killing spree to avenge his dog's death and get his car back.

                    John Wick is known for his highly skilled fighting techniques, precision marksmanship, and ruthless efficiency. He is feared and respected in the criminal underworld for his reputation as the "Baba Yaga" or "Boogeyman". Throughout the series, John Wick faces off against numerous dangerous foes, including other hitmen, crime lords, and assassins, as he battles to survive and protect those close to him.

                    John Wick has become a popular and iconic character in contemporary action cinema, with his signature black suit, sleek hairstyle, and deadly proficiency with firearms. The character has spawned merchandise, video games, and a spin-off TV series, highlighting the enduring appeal of this modern-day action hero.
                </p>
            </div>
            <div className="w-1/2">
                <img src="https://images.thedirect.com/media/article_full/john-wick-5-movie.jpg" alt="John wick" className="w-full h-auto" />
            </div>
        </div>
    )
}
