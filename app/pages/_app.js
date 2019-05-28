import '@babel/polyfill';

import React from 'react'
import App, { Container } from 'next/app'

import { SOCKET_URL } from '../constants';

import { Head, Layout } from '../layout';
import Listen from './Listen';
import Menu from '../menu';

import getTracks from '../api/getTracks';

export default class SoulProvider extends App {
  render () {
    return (
      <Container>
        <Head title="SOUL PROVIDER | Internet radio for those who like to groove." />
        <Layout>
          <Menu />
          <Listen />
        </Layout>
      </Container>
    );
  }
}
