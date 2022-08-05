import { Suspense } from 'react';

// project imports
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) => (props) =>
    (
        <Suspense fallback={<Loader />} sx={{ padding: '50px' }}>
            <Component {...props} />
        </Suspense>
    );

export default Loadable;
