import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import styles from './Welcome.less';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);
const { Meta } = Card;
export default () => (
  <PageContainer>
     <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="http://qiniu.daosuan.net/picture-1606378155000" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  </PageContainer>
);
