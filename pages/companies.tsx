import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { handleViewsCompany } from '../lib/helper';
import { CompanyType } from '../lib/types';
import Head from 'next/head'
import Router from 'next/router';

const Index: NextPage = () => {

    const [companies, setCompanies] = useState<CompanyType[]>([]);

    useEffect(() => {
        handleViewsCompany(setCompanies)
    }, [])

    return (
        <div>
            <Head>
                <title>Company List Views</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div><button onClick={() => Router.push('/')}>Home</button></div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CIN</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        companies ? companies.map((company, index) => {
                            return (
                                <tr key={index}>
                                    <td>{`${company.id}`}</td>
                                    <td>{company.cin}</td>
                                    <td>{company.name}</td>
                                </tr>
                            )
                        }) : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Index
