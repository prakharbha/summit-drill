'use client'

import { PortableText as BasePortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

// Custom components to match Summit Drilling's styling
const components: PortableTextComponents = {
    block: {
        // Headings with site styling
        h2: ({ children }) => (
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mt-10 mb-4">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl md:text-3xl font-bold text-[#1A365D] mt-8 mb-3">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-xl md:text-2xl font-bold text-[#1A365D] mt-6 mb-2">
                {children}
            </h4>
        ),
        // Normal paragraphs
        normal: ({ children }) => (
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {children}
            </p>
        ),
        // Block quote
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#377d7e] pl-6 py-2 my-6 italic text-gray-600 text-lg">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-gray-700">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-6 text-lg text-gray-700">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li className="ml-4">{children}</li>,
        number: ({ children }) => <li className="ml-4">{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        link: ({ value, children }) => {
            const href = value?.href || ''
            const isExternal = href.startsWith('http')
            return (
                <a
                    href={href}
                    className="text-[#377d7e] hover:text-[#1A365D] underline transition-colors"
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                    {children}
                </a>
            )
        },
    },
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) return null
            return (
                <figure className="my-8">
                    <Image
                        src={urlFor(value).width(800).url()}
                        alt={value.alt || ''}
                        width={800}
                        height={450}
                        className="rounded-lg shadow-lg"
                    />
                    {value.caption && (
                        <figcaption className="text-center text-gray-500 mt-2 text-sm italic">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            )
        },
    },
}

interface PortableTextProps {
    value: any
    className?: string
}

export function PortableText({ value, className = '' }: PortableTextProps) {
    return (
        <div className={`prose-summit ${className}`}>
            <BasePortableText value={value} components={components} />
        </div>
    )
}
