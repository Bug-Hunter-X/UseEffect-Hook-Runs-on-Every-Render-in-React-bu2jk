```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, including the initial one
    console.log('Count:', count);
    return () => {
      // Cleanup function (optional)
      console.log('Cleanup');
    };
  }, [count]); // This dependency array ensures the effect only runs when 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```