# flutter-ish

A babel plugin to convert the following code :

```js

class Button {

    constructor ( props ) {
        this.props = props; q;
    }
}



Button(
    {
        onPressed: () => console.log( 'Button pressed' )
    }
);

```

to:

```js
class Button {

    constructor ( props ) {
        this.props = props; q;
    }
}



new Button(
    {
        onPressed: () => console.log( 'Button pressed' )
    }
);

```
