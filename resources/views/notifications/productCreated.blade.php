<x-mail::message>
<div>
    <div>
        <h2 style="font-weight: bold; font-size: 1.125rem">Добавлен новый продукт!</h2>
    </div>
    <div style="margin-top: 0.75rem">
        <div style="display: flex; margin-top: 0.5rem">
            <div style="width: 7rem">
                Артикул:
            </div>
            <div style="width: fit-content">
                {{$product->article}}
            </div>
        </div>
        <div style="display: flex; margin-top: 0.5rem">
            <div style="width: 7rem">
                Название:
            </div>
            <div style="width: fit-content">
                {{$product->name}}
            </div>
        </div>
        <div style="display: flex; margin-top: 0.5rem">
            <div style="width: 7rem">
                Статус:
            </div>
            <div style="width: fit-content">
                {{$product->getStatus()}}
            </div>
        </div>
        <div style="display: flex; margin-top: 0.5rem">
            <div style="width: 7rem">
                Атрибуты:
            </div>
            <div style="width: fit-content; display: flex; flex-direction: column">
                <ul style="list-style-type: none; padding: 0; margin: 0">
                    @foreach($product->data as $item)
                        <li>{{ $item['name']}}: {{$item['value']}}</li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
</div>
    <x-mail::button :url="$actionUrl">
        {{ $actionText }}
    </x-mail::button>
    @isset($actionText)
        <x-slot:subcopy>
            @lang(
                "If you're having trouble clicking the \":actionText\" button, copy and paste the URL below\n".
                'into your web browser:',
                [
                    'actionText' => $actionText,
                ]
            ) <span class="break-all">[{{ $displayableActionUrl }}]({{ $actionUrl }})</span>
        </x-slot:subcopy>
    @endisset
</x-mail::message>
