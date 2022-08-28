import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {  Fragment, useState } from 'react';
import {AsyncTypeahead} from "react-bootstrap-typeahead"
import { handleCreateCompany, handleSearch } from '../lib/helper';
import { CompanyType } from '../lib/types';
import Router from 'next/router';


const Home: NextPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<CompanyType[]>([]);
  const [option, setOption] = useState<CompanyType>();

  const filterBy = () => true;

  return (
    <div className={styles.container}>
      <Head>
        <title>Company List Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div><button onClick={() => Router.push('/companies')}>Companies</button></div>

      <main className={styles.main}>
        <AsyncTypeahead
          filterBy={filterBy}
          id="async"
          isLoading={isLoading}
          labelKey="name"
          minLength={3}
          onSearch={query => handleSearch(query, setIsLoading, setOptions)}
          options={options}
          placeholder="Search for a company"
          renderMenuItemChildren={(option: any) => {                        
            return (
              <Fragment>
                <span onClick={() => setOption(option)} key={option.cin}>{`${option.name}`}</span><br/>
              </Fragment>
            )
          }}
        />

        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       {option ? <button onClick={() => handleCreateCompany(option, setIsLoading)}>Submit</button> : null}
      </main>
    </div>
  )
}

export default Home
