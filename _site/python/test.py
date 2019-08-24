from function import foo
from mock import patch

@patch('foo')
def test_foo(foo_mock):
    mock_client = mock_foo.Client.return_value
    def side_effect(arg):
        if arg == '123':
            raise HTTPError
        else:
            return fixtures.FOO_SUCCESS
    mock_client.C.side_effect = side_effect

    some_function_that_uses_mocked_function_underneath()
