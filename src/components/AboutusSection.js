import React from 'react'

export default function AboutusSection() {
  return (
    <div className='flex flex-col justify-between items-center h-96 lg:grid lg:grid-flow-col gap-4 p-4'>
        <div className='w-[80%] mx-auto text-slate-900'>
            <h1 className="text-4xl font-bold text-center">About Us</h1>
            <p className="text-lg text-center">We are a team of developers building the Nandini App.</p>

        </div>
        <div className='w-[80%] mx-auto text-slate-900'>
            <p>

            A sample text paragraph is a written section that illustrates a specific idea or theme. It typically includes a topic sentence, supporting details, and a concluding sentence. Sample paragraphs can be used for various purposes, such as demonstrating writing style, presenting information, or providing examples in educational contexts.

            </p>

        </div>
    </div>
  )
}
