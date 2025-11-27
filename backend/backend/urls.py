"""
URL configuration for backend project.
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

from ticketing.views import (
    TicketViewSet,
    TicketCommentViewSet,
    TicketCategoryViewSet,
    WorkflowStageViewSet,
)

# ------------------------------
# Initialize DRF Router FIRST
# ------------------------------
router = DefaultRouter()
router.register('tickets', TicketViewSet)
router.register('comments', TicketCommentViewSet)
router.register('categories', TicketCategoryViewSet)
router.register('stages', WorkflowStageViewSet)

# ------------------------------
# URL Patterns
# ------------------------------
urlpatterns = [
    path('admin/', admin.site.urls),

    # Router MUST be included BEFORE other /api/ includes
    path('api/', include(router.urls)),

    # Other app routes
    path('api/', include('users.auth_urls')),
    path('api/', include('users.urls')),
    path('api/', include('employees.urls')),
    path('api/', include('attendance.urls')),
    path('api/', include('payroll.urls')),
    path('api/', include('dashboard.urls')),
]

# ------------------------------
# Static files (dev only)
# ------------------------------
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
