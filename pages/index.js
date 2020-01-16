import {withTranslation } from '../i18n'
const Index = ({ t }) => (
    <div>
      <p>Hello Next.js => { t('test') }</p>
    </div>
  );

  Index.getInitialProps = async () => ({
    namespacesRequired: ['common'],
  })
  
  export default withTranslation('common')(Index);