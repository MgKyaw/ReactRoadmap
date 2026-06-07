import { useTransition } from 'react';

const App =()=>{
  const [timeUpdate, setTimeUpdate] = useState(2)
  const [isPending, startTransition] = useTransition()

  startTransition(()=>{
      // handle state change in here
    })

  }