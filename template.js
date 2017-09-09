module.exports = function(COMPONENT_NAME, stateles = false) {
    const files = {
        js: `index.js`,
        jsx: `${COMPONENT_NAME}.jsx`,
        css: `${COMPONENT_NAME}.css`
    }
    const {js, jsx, css} = files;

    const INDEX_JS = `import ${COMPONENT_NAME} from './${jsx}'
export default ${COMPONENT_NAME};
    `
    const COMP_JSX = `import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './${css}'


class ${COMPONENT_NAME} extends Component {
    render() {
        return (
            <div className="${COMPONENT_NAME}">
            </div>
        );
    }
}

export default ${COMPONENT_NAME};
`

    let COMP_STATELESS_JSX = `import React  from 'react'
import PropTypes from 'prop-types'
import './${css}'


const ${COMPONENT_NAME} = ({  }) => {
    
    return (
        <div className="${COMPONENT_NAME}">
        </div>
    )
}

${COMPONENT_NAME}.propTypes = {
}

${COMPONENT_NAME}.defaultProps = {
}


export default ${COMPONENT_NAME};
`

    let COMP_CSS = `.${COMPONENT_NAME} {}`

    return [
        { 
            path: `${js}`,
            data:  INDEX_JS
        },
        { 
            path: `${jsx}`,
            data:  stateles ? COMP_STATELESS_JSX : COMP_JSX,  
        },
        { 
            path: `${css}`,
            data:  COMP_CSS
        }
    ]
}