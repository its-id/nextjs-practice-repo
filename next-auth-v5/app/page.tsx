'use client'; //we use this keyword to make our page render on the client side. useful for using useState, useEffect hooks.
import { Button } from '@/components/ui/button';


// By default, all our pages our rendered as server components. useful for using all server related tasks, like fetching data from a database.
export default function Home() {
  console.log('WHERE AM I LOGGED?');
  return (
    <Button size='lg' variant='outline'>
      Click me!
    </Button>
  )
}
