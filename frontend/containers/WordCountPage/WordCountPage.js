//.containers/WordCountPage.js
import React, { PureComponent } from 'react';
import { basePageWrap } from '../BasePage';
import s from './WordCountPage.module.css';

import i18n from '../../i18n';

import Button from '../../components/Button';
import RawHtml from '../../components/RawHtml';

class WordCountPage extends PureComponent {
    state = {};

    static defaultProps = {};

    static propTypes = {};

    handleWordCountClick = () => {
        const quickAndDirtyWordCount = this.props.richText.replace(/<[^>]+>/g, ' ')
            .split(' ').filter(x => x).length;

        alert(`This article contains ${quickAndDirtyWordCount} words`);
    }

    render() {
        const {richText} = this.props;
        return (
            <div className={s.WordCountPage}>
                <div className={[s.Section, s.SectionBody]}>
                    <RawHtml html={richText} />
                </div>
                <div className={[s.Section, s.SectionButton]}>
                    <Button text={i18n.t('wordcountpage.buttonText')} onClick={this.handleWordCountClick} />
                </div>
            </div>
        );
    }
}

export default basePageWrap(WordCountPage);
