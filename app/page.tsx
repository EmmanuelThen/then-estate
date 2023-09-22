import Image from 'next/image'
import * as Tabs from '@radix-ui/react-tabs';
import TabsNav from './components/TabsNav';


export default function Home() {
  return (
    <main className="min-h-screen">
      <TabsNav />
    </main>
  )
}
