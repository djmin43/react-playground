'use client'
import React, {useActionState} from 'react';

async function increment(previousState: number, formData: FormData) {

    return previousState + 1;
}

const ActionStatePage = () => {
    const [state, formAction, isPending] = useActionState(increment, 0);

    return (
        <div>
            <form>
                {state}
                <button formAction={formAction}>Increment</button>
            </form>

        </div>
    );
};

export default ActionStatePage;