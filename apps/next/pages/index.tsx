import {VStack} from '@ledger-sync/app-ui'
import {Button, Input} from '@supabase/ui'
import {useRouter} from 'next/router'
import {useState} from 'react'

export default function Home() {
  const router = useRouter()
  const [userId, setUserId] = useState('')
  return (
    <VStack align="center" justify="center" css={{height: '100vh'}}>
      <Input
        label="Ledger Id"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        actions={[
          <Button onClick={() => router.push(`/ledger/${userId}`)}>Go</Button>,
        ]}
      />
    </VStack>
  )
}