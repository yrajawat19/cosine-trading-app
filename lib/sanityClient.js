import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'q7hsr2v9',
  dataset: 'production',
  apiVersion: 'v1',
  token: 'skHCmMNYYaio1qnc1u0Fkbrt4C47uCoRrO3Fjwsl0ZfuoEXG5H0vNiCnowpe5tn4r2QNYnTNwgE8hCDQFQ9nJVlFv0s9SHZIIiJp7h1KP8GetW2Dcactw8byfqaSFwmjNLs2LJ72PipVywQsM5u2KOmyWPyTKpQD64xN9dgvdpY1bKztk21G',
  useCdn: false,
})