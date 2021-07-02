
from rest_framework import pagination

class CustomPagination(pagination.PageNumberPagination):
    page_size = 3
    page_size_query_param = 'numero_posts'
    max_page_size = 30
    page_query_param = 'p'