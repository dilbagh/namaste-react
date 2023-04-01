/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>This is H1</h1>
 *      </div>
 *      <div id="child2">
 *          <h1>Another H1</h1>
 *          <h2 class="bleed">And an H2</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child1' },
        React.createElement('h1', {}, "This is H1")),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, "Another H1"),
        React.createElement('h2', { className: 'bleed' }, 'And an H2')
    ])
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);