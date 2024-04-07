'use client'
import Image from 'next/image'
import { useState, Fragment, useCallback } from 'react'


const DATA = [
  {
    id: 0,
    title: 'OK - Verkefnastjóri',
    subTitle: 'September 2022 - Núverandi',
    description:
      'Hjá OK starfa ég sem verkefnastjóri í Veflausnum. Við gerum allt frá litlum vefsíðum upp í allskonar flókin kerfi.'
  },
  {
    id: 1,
    title: 'Opin kerfi - Lager & Verkstæði',
    subTitle: 'Júní 2016 - 2022',
    description:
      'Ég hef starfað hjá Opnum kerfum frá því ég kláraði menntaskóla og með háskólanámi.'
  },
  {
    id: 2,
    title: 'Öldugata 45',
    subTitle: 'Apríl 2018 - Núverandi',
    description:
      'Ég hef starfað í íbúðarkjarna í hlutastarfi frá 2018. Starfið felur í sér margskonar verkefni til að styðja íbúa við dagleg líf.'
  }
]

type JobProps = {
  title: string;
  subTitle: string;
  description: string;
};

const Job = ({ title, subTitle, description }: JobProps) => {
  return (
    <div className="job">
      <h2 className="jobTitle">{title}</h2>
      <p className="jobSubTitle">{subTitle}</p>
      <p className="jobDescription">{description}</p>
    </div>
  );
};

type HeaderProps = {};

const Header = () => {
  return (
    <header className="header">
      <div> {/* This div wraps the text content */}
        <h1>Indíana Eir Árnadóttir</h1>
        <p>Borða ekki appelsínugult nammi</p>
      </div>
      <div className="headerImage">
        <Image
          src='/Ljosmynd_Indiana_Eir 2.jpeg' // Update with the actual path to your image
          alt='Profile Picture'
          width={100}
          height={100}
          layout="fixed"
        />
      </div>
    </header>
  );
};

type ContentProps = {
  data: typeof DATA
};

const Content = ({ data }: ContentProps) => {
  return (
    <div>
      {data.map(item => (
        <Job
          key={item.id}
          title={item.title}
          subTitle={item.subTitle}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Content data={DATA} />
    </Fragment>
  );
}