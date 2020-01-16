import {withTranslation } from '../i18n'
const Index = ({ t }) => (
    <div>
      <p>Hello Next.js => { t('test') }</p>
    </div>
  );
  
  export default withTranslation('common')(Index);