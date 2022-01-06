import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import { Header } from '../../components'

function signIn({ providers }) {
  return (
    <div>
      <Header />

      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="p-3 bg-blue-500 rounded-lg text-white"
              onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default signIn

export async function getServerSideProps(context) {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
