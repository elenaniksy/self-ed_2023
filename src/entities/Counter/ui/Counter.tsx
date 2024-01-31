import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
    getCounterValueSelector,
} from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValueSelector);

    const onIncrement = () => {
        dispatch(counterActions.increment());
    };
    const onDecrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-value">
                {`value = ${counterValue}`}
            </h1>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onIncrement}
                data-testid="increment"
            >
                +
            </Button>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onDecrement}
                data-testid="decrement"
            >
                -
            </Button>
        </div>
    );
};
