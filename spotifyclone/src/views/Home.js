import Section from 'components/Section';

export default function Home() {

  const items = [
    {
      id: 1,
      title: 'Intouchables - Soundtracks Ost',
      describetion: "Original Soundtrack",
      image: 'https://i.scdn.co/image/ab67616d0000b2731f6a2a40bb692936879db730',
      type: 'album',
      src:'https://cdn.freesound.org/previews/685/685564_5674468-lq.mp3'
    },
    {
      id: 2,
      title: 'Intouchables - Soundtracks Ost',
      describetion: "Original Soundtrack",
      image: 'https://i.scdn.co/image/ab6761610000f17801b9b4ec2a05d0805428acfa',
      type: 'artist',
      src:'https://cdn.freesound.org/previews/685/685530_3704754-lq.mp3'
    },
    {
      id: 3,
      title: 'Intouchables - Soundtracks Ost',
      describetion: "Original Soundtrack",
      image: 'https://i.scdn.co/image/ab67706c0000da845a2befec597e5e3b6a470629',
      type: 'podcast',
      src:'https://cdn.freesound.org/previews/685/685395_14918837-lq.mp3'
    },
    {
      id: 4,
      title: 'Intouchables - Soundtracks Ost',
      describetion: "Original Soundtrack",
      image: 'https://i.scdn.co/image/ab67616d0000b2731f6a2a40bb692936879db730'
    },
    {
      id: 5,
      title: 'Intouchables - Soundtracks Ost',
      describetion: "Original Soundtrack",
      image: 'https://i.scdn.co/image/ab67616d0000b2731f6a2a40bb692936879db730'
    }
  ]


  return (
    <div className='grid gap-y-8'>
      <Section
        title="Recently Played"
        more="blablala"
        items={items}
      ></Section>

      <Section
        title="Show to try"
        more="blablala"
        items={items}
      ></Section>

      <Section
        title="For you"
        more="blablala"
        items={items}
      ></Section>
    </div>
  )
}

