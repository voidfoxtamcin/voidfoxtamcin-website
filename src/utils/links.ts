type Link = {
  name: string,
  href: string,
}

const Links: Link[] = [
  { name: 'Commission Info', href: '/commission-info' },
  { name: 'Portofolio', href: '/portofolio' },
  { name: 'My Original Charactes', href: '/my-original-characters' },
  { name: 'Blog', href: '/blog' },
]

const SocialMedia = [
  { name: 'Twitter', href: 'https://twitter.com/VoidFoxTamcin', icon: 'twitter' },
  { name: 'Patreon', href: 'https://patreon.com/VoidFoxTamcin', icon: 'patreon' },
  { name: 'BlueSky', href: 'https://bsky.app/profile/voidfoxtamcin.bsky.social', icon: 'butterfly' },
  { name: 'Itaku', href: 'https://itaku.ee/profile/voidfoxtamcin', icon: 'info' },
  { name: 'Furaffinity', href: 'https://www.furaffinity.net/user/voidfoxtamcin', icon: 'paw' },
]

export { Links, SocialMedia }