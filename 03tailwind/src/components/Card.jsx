import React from 'react'

function Card({ username = "John Doe", post = "Software Engineer", imgURL = "https://images.pexels.com/photos/31571137/pexels-photo-31571137/free-photo-of-black-and-white-cityscape-in-portland-oregon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" }) {
    return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full" src={imgURL} alt="Hello" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.
                        </p>
                    </blockquote>
                    <figcaption>
                        <div>
                            {username}
                        </div>
                        <div>
                            {post}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Card