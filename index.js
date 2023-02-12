module.exports = function ( { types: t } ) {
    return {
        name:'babel-plugin-flutter-ish',
        visitor: {
            CallExpression ( path ) {
                if ( path.node.callee.type === 'Identifier' ) {
                    const calleeName = path.node.callee.name;
                    const binding = path.scope.getBinding( calleeName );
                    if ( binding && binding.path.node.type === 'ClassDeclaration' ) {
                        path.replaceWith( t.newExpression( t.identifier( calleeName ), path.node.arguments ) );
                    }
                }
            }
        }
    };
};
