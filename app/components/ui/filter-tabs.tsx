import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const categories = [
    {
        name: 'Price (High to Low)',
        posts: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
    },
    {
        name: 'Price (Low to High)',
        posts: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
    },
    {
        name: 'Trending',
        posts: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    },
    {
        name: 'Bedrooms',
        posts: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    },
    {
        name: 'Last update date',
        posts: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    },
]


type Props = {}

const FilterTabs = (props: Props) => {
    return (
        <div className="flex w-full justify-center px-4">
            <div className="flex justify-end w-full ">
                <TabGroup>
                    <TabList className="flex gap-2">
                        {categories.map(({ name }) => (
                            <Tab
                                key={name}
                                className="rounded-full py-1 px-3 text-xs font-medium whitespace-nowrap  focus:outline-none data-[selected]:bg-blackA4 data-[hover]:bg-blackA3 data-[selected]:data-[hover]:bg-blackA2 data-[focus]:outline-1 data-[focus]:outline-blackA2"
                            >
                                {name}
                            </Tab>
                        ))}
                    </TabList>
                    {/* <TabPanels className="mt-3">
                        {categories.map(({ name, posts }) => (
                            <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                                <ul>
                                    {posts.map((post) => (
                                        <li key={post.id} className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5">
                                            <a href="#" className="font-semibold ">
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                            <ul className="flex gap-2 /50" aria-hidden="true">
                                                <li>{post.date}</li>
                                                <li aria-hidden="true">&middot;</li>
                                                <li>{post.commentCount} comments</li>
                                                <li aria-hidden="true">&middot;</li>
                                                <li>{post.shareCount} shares</li>
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </TabPanel>
                        ))}
                    </TabPanels> */}
                </TabGroup>
            </div>
        </div>
    )
}

export default FilterTabs