1. Token
    - Construct: header, payload, signature
    - Access token
        - Login
        - Recept { access token, refresh token, expires }
        - If logout but access token not running time. get access token to blacklist
    - Refresh 
        - Check when almost to running time, use refresh token to get new token
        - if logout just need remove refresh token
        - Save in database
    - If token in cookies it managed by Server, if token in local storage it managed by Client
2. React class component
    - props nhận ở constructor
    - props.childrent
    - khởi tạo state oet constructor
    - render jsx ở hàm render
    - life circle: mounting(componentDidMount), updating(ComponentDidUpdate), unmounting (ComponentWillUnmount)
    - API context
    - HOC component
    - props render
    - ...
3. Hooks
    - useState()
    - useEffect()
    - useDispatch()
    - useSelector()
    - useRef()
    - UseContext()
    ....