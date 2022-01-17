import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import { Header } from '../../components'

function signIn({ providers }) {
  return (
    <div>
      <Header />

      <div className="flex justify-center mt-10">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className="button" onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default signIn

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
